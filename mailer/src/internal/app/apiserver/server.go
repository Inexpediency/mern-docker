package apiserver

import (
	"fmt"
	"net/http"
	"time"

	"github.com/gorilla/mux"
	"github.com/sirupsen/logrus"
)

const ctxKeyRequestID ctxKey = iota

type ctxKey int8

type server struct {
	router *mux.Router
	logger *logrus.Logger
}

func newServer() *server {
	s := &server{
		router: mux.NewRouter(),
		logger: logrus.New(),
	}

	return s
}

func (s *server) configurateRouter() {
	s.router.Use(s.logRequest)
}

func (s *server) logRequest(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		logger := s.logger.WithField("request", logrus.Fields{
			"remote_addr": r.RemoteAddr,
			"request_id":  r.Context().Value(ctxKeyRequestID),
		})

		start := time.Now()

		rw := &responseWriter{w, http.StatusOK}
		next.ServeHTTP(rw, r)

		logger.Info(fmt.Sprintf(
			"complited with %d %s in %v\n",
			rw.code,
			http.StatusText(rw.code),
			time.Now().Sub(start),
		))
	})
}
