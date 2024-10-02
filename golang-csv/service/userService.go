package service

import "golang-csv/modal"

type Userservice interface {
	Getvalue(key string, value modal.Responder)
	Setvalue(key string, value modal.Responder)
}
