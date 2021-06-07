import { Component, OnInit } from '@angular/core';
import { GithubService } from './../../_Services/github.service';
import { ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-git-hub',
  templateUrl: './git-hub.component.html',
  styleUrls: ['./git-hub.component.css']
})
export class GitHubComponent implements OnInit {

  repoID: string;
  markdown: string;
  pageLink: string;
  

  constructor(private githubService: GithubService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.getRepoID();


    this.pageLink = "https://github.com/jaime-olivares/zipstorer";
    this.markdown = `
    # ZipStorer
    A Pure C# class for storing files in Zip format
    
    [![NuGet](https://img.shields.io/nuget/v/ZipStorer.svg)](https://www.nuget.org/packages/ZipStorer/)
    [![github](https://img.shields.io/github/stars/jaime-olivares/zipstorer.svg)]()
    [![Build Status](https://dev.azure.com/jaime-olivares-f/zipstorer/_apis/build/status/jaime-olivares.zipstorer?branchName=master)](https://dev.azure.com/jaime-olivares-f/zipstorer/_build/latest?definitionId=1&branchName=master)
    
    ZipStorer is a minimalistic cross-platform .net class to create Zip files and store/retrieve files to/from it, by using the Deflate algorithm. No other compression methods supported.
    
    ## Advantages and usage
    ZipStorer has the following advantages:
    
    * It is a short and monolithic C# class that can be embedded as source code in any project (1 source file)
    * No Interop calls, increments portability to Mono and other non-Windows platforms
    * Can also be implemented with Mono, .NET Compact Framework and .Net Standard 2.0+
    * Async methods for storing and extracting files (only for .Net Framework 4.5+ and .Net Standard 2.0+)
    * NEW: Support for Zip64 (file sizes > 4GB) 
    * UTF8 Encoding support and ePUB compatibility
    * Available as a [nuget package](https://www.nuget.org/packages/ZipStorer/)
    
    ## Using the code
    The ZipStorer class is the unique one needed to create the zip file. It contains a nested structure *(ZipFileEntry)* for collecting each directory entry. The class has been declared inside the System.IO namespace. 
    
    There is no default constructor. There are two ways to construct a new ZipStorer instance, depending on specific needs: use either the *Create()* or the *Open()* static method. To create a new Zip file, use the *Create()* method like this:`;
    
  }

  getRepoID() {
    this.route.params.subscribe(prams => {
      this.repoID = prams.id;
      
    })
  }

}
