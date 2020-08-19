package apiserver

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestServer_HandleTestSending(t *testing.T) {
	s := newServer()

	testCases := []struct {
		name         string
		payload      interface{}
		expectedCode int
	}{
		{
			name: "mail to ythosa",
			payload: map[string]string{
				"email": "ythosa@github.io",
				"text":  "hello",
			},
			expectedCode: http.StatusOK,
		},
		{
			name: "mail to someone",
			payload: map[string]string{
				"email": "someone@mail.itsmail",
				"text":  "very important message",
			},
			expectedCode: http.StatusOK,
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			rec := httptest.NewRecorder()
			b := &bytes.Buffer{}
			json.NewEncoder(b).Encode(tc.payload)
			req, _ := http.NewRequest(http.MethodPost, "/send_test", b)

			s.ServeHTTP(rec, req)
			assert.Equal(t, tc.expectedCode, rec.Code)
		})
	}
}
