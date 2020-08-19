package model

import "testing"

// TestMessage ...
func TestMessage(t *testing.T) *Message {
	return &Message{
		Email: "user@example.org",
		Text:  "hello, buddy",
	}
}
