package model_test

import (
	"testing"

	"github.com/Ythosa/mern-docker/mailer/internal/app/model"
	"github.com/stretchr/testify/assert"
)

func TestMessageValidate(t *testing.T) {
	testCases := []struct {
		name    string
		m       func() *model.Message
		isValid bool
	}{
		{
			name: "valid",
			m: func() *model.Message {
				return model.TestMessage(t)
			},
			isValid: true,
		},
		{
			name: "not valid all props",
			m: func() *model.Message {
				m := model.TestMessage(t)
				m.Email = "dadada"
				m.Text = ""

				return m
			},
			isValid: false,
		},
		{
			name: "not valid email",
			m: func() *model.Message {
				m := model.TestMessage(t)
				m.Email = "dadad#!#@@.rua"
				m.Text = "hello"

				return m
			},
			isValid: false,
		},
		{
			name: "not valid text",
			m: func() *model.Message {
				m := model.TestMessage(t)
				m.Email = "ythosa@github.io"
				m.Text = ""

				return m
			},
			isValid: false,
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			if tc.isValid {
				assert.NoError(t, tc.m().Validate())
			} else {
				assert.Error(t, tc.m().Validate())
			}
		})
	}
}
