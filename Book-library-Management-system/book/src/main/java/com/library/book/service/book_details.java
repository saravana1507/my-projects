package com.library.book.service;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class book_details {

	@Id
	//@GeneratedValue(strategy=GenerationType.IDENTITY)
	 private Integer book_id;
	
	 private String  book_name;
	 private String  author_name;
	 private String  publication;
	 private Integer published_year;
	 private Integer book_cost;
	
	 public Integer getBook_id() {
		return book_id;
	}
	public void setBook_id(Integer book_id) {
		this.book_id = book_id;
	}
	public String getBook_name() {
		return book_name;
	}
	public void setBook_name(String book_name) {
		this.book_name = book_name;
	}
	public String getAuthor_name() {
		return author_name;
	}
	public void setAuthor_name(String author_name) {
		this.author_name = author_name;
	}
	public String getPublication() {
		return publication;
	}
	public void setPublication(String publication) {
		this.publication = publication;
	}
	public Integer getPublished_year() {
		return published_year;
	}
	public void setPublished_year(Integer published_year) {
		this.published_year = published_year;
	}
	public Integer getBook_cost() {
		return book_cost;
	}
	public void setBook_cost(Integer book_cost) {
		this.book_cost = book_cost;
	}
	@Override
	public String toString() {
		return "book_details : book_id=" + book_id + ", book_name=" + book_name + ", author_name=" + author_name
				+ ", publication=" + publication + ", published_year=" + published_year + ", book_cost=" + book_cost;
	}
	
	
}