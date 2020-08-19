package model

import (
	validation "github.com/go-ozzo/ozzo-validation"
	"github.com/go-ozzo/ozzo-validation/is"
)

// Message ...
type Message struct {
	Email string `json:"email"`
	Text  string `json:"text"`
}

// Validate ...
func (m *Message) Validate() error {
	return validation.ValidateStruct(
		m,
		validation.Field(&m.Email, validation.Required, is.Email),
		validation.Field(&m.Text, validation.Required),
	)
}
