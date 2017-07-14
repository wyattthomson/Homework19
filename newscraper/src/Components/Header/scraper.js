
import mongoose from "mongoose";

// Models
import Note from "../models/Note.js";
import Article from "./models/scrapedArticles.js";

// Scraping
import request from "request";
import cheerio from "cheerio";

// Database configuration with mongoose
mongoose.connect("mongodb://localhost/week18day3mongoose");
var db = mongoose.connection;

request("http://www.nytimes.com/", function(error, response, html) {
    const $ = cheerio.load(html);
    $("article h2").each(function(i, element) {
     	 let result = {};
     	 result.title = $(this).children("a").text();
     	 result.link = $(this).children("a").attr("href");
         let entry = new Article(result);
     	 entry.save(function(err, doc) {
      		  // Log any errors
    	      if (err) {
       			   console.log(err);
        	  }
       		 // Or log the doc
     	      else {
          console.log(doc);
        }
      });

    });
  });
  res.send ("Scrape Complete");
});
