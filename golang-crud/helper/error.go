package helper

import "errors"

//Database error message
func Dberror(err error) error {
	if err != nil {
		return errors.New("database not connected")
	}
	return nil
}

//Create error message
func Create_error(err error) error {
	if err != nil {
		return errors.New("userdetail not saved")
	}
	return nil
}

//Login error message

func Login_error(err error) error {
	if err != nil {
		return errors.New("login unsuccessfully")
	}
	return nil
}

// Update error message

func Update_error(err error) error {
	if err != nil {
		return errors.New("update unsuccessfully")
	}
	return nil
}

// Update erro message
func Update_errorId(err error) string {
	if err != nil {
		return "Only assign number UserId"
	}
	return ""
}

func ErrorPanic(err error) error {
	if err != nil {
		return errors.New("localhost not connected")
	}
	return nil
}

func Delete_error(err error) string {
	if err == nil {
		return "Cannot find UserId "
	}
	return ""
}

func FindbyId_error(err error) string {
	if err != nil {
		return "Only assign number in UserId"
	}
	return ""
}

func Findall(err error) string {
	if err != nil {
		return "No Data in file"
	}
	return ""
}
