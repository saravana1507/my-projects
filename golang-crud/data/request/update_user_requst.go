package request

type UpdateUserRequest struct {
	Id          int    `validate:"required" form:"userid"`
	Firstname   string `validate:"required,min=1,max=40"json:"firstname" form:"firstname"`
	Lastname    string `validate:"required,min=1,max=40"json:"lastname"form:"lastname"`
	Email       string `validate:"required,max=40"json:"email"form:"email"`
	Phonenumber int    `validate:"required,max=10"json:"phonenumber" form:"phonenumber"`
}
