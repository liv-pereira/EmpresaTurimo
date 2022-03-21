package soulCode.empresa.controllers.exceptions;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletRequest;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import soulCode.empresa.services.exceptions.DataIntegrityViolationException;
import soulCode.empresa.services.exceptions.ObjectNotFoundException;
import soulCode.empresa.controllers.exceptions.StandardError;

@ControllerAdvice	
public class ControllerExceptionHandler {
	
	@ExceptionHandler(ObjectNotFoundException.class)
	
	public ResponseEntity <StandardError> objectNotFoundException (ObjectNotFoundException e, ServletRequest request){
		StandardError error = new StandardError(System.currentTimeMillis(), HttpStatus.NOT_FOUND.value(), e.getMessage());
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
	}
	
@ExceptionHandler(DataIntegrityViolationException.class)
	
	public ResponseEntity <StandardError> dataIntegrityViolationException (DataIntegrityViolationException e, ServletRequest request){
		StandardError error = new StandardError(System.currentTimeMillis(), HttpStatus.BAD_REQUEST.value(), e.getMessage());
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);
	}
@ResponseStatus(HttpStatus.BAD_REQUEST)
@ExceptionHandler(MethodArgumentNotValidException.class)
public Map<String,String>handleValidationException(MethodArgumentNotValidException ex){
Map<String, String> errors = new HashMap<>();
ex.getBindingResult().getAllErrors().forEach((error)->{
	String fieldName = ((FieldError)error).getField();
	String errorMessage = error.getDefaultMessage();
	errors.put(fieldName, errorMessage);
});
return errors;
	
}


}
