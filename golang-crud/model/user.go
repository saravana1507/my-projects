package model

type FullDetails struct {
	Id          int    `gorm:"type:serial;Primary_key"`
	Firstname   string `gorm:"type:varchar(50)"`
	Lastname    string `gorm:"type:varchar(50)"`
	Email       string `gorm:"type:varchar(50)":unique`
	Phonenumber int    `gorm:"type:int"`
	Password    string `gorm:"type:varchar(100)"`
}
