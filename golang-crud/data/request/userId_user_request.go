package request

type UserIdRequest struct {
	Id string `validate:"required"json:"userid" form:"userid"`
}
