package request

type LoginUserRequest struct {
	Firstname string `validate:"required,min=1,max=40" json:"firstname" form:"firstname"`
	Password  string `validate:"required,min=7,max=14" json:"password" form:"password"`
}
