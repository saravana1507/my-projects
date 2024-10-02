package request

type DeleteUserRequest struct {
	Id string `validate:"required"json:"firstname" form:"userid"`
}
