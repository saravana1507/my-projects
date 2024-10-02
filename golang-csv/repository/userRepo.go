package repository

import "golang-csv/modal"

type UserRepo interface {
	GetAll(value modal.Responder) interface{}
	SetAll(user modal.Responder)
}
