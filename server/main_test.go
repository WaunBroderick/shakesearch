package main

import (
	"fmt"
	"log"
	"testing"
)

// Adding a  test to show that the Searcher.Load method works by loading a file
func TestSearcher_Load(t *testing.T) {
	searcher := Searcher{}
	err := searcher.Load("completeworks.txt")
	if err != nil {
		t.Fatal(err)
	}
	if len(searcher.CompleteWorks) != 5767184 {
		t.Fatalf("expected 5767184 bytes, got %d", len(searcher.CompleteWorks))
	}
}
// Adding a test to show that the Searcher.Load method works by searching a file
func TestSearcher_Search(t *testing.T) {
	searcher := Searcher{}
	err := searcher.Load("completeworks.txt")
	if err != nil {
		t.Fatal(err)
	}

	results := searcher.Search("the")
	if len(results) != 56262 {
		t.Fatalf("expected 56262 results, got %d", len(results))
	}
}

// Adding a documented example test to show that the Searcher.Search method works by searching for a word
func exampleSearcher_Search() {
	searcher := Searcher{}
	err := searcher.Load("completeworks.txt")
	if err != nil {
		log.Fatal(err)
	}

	results := searcher.Search("king")
	fmt.Println(results)
}