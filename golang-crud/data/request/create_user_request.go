package request

type CreateUserRequest struct {
	Firstname   string `validate:"required,min=1,max=40"json:"firstname" form:"firstname"`
	Lastname    string `validate:"required,min=1,max=40"json:"lastname" form:"lastname"`
	Email       string `validate:"required,max=40"json:"email"form:"email"`
	Phonenumber int    `validate:"required,max=10"json:"phonenumber"form:"phonenumber"`
	Password    string `validate:"required,max=14"json:"password"form:"password"`
}
