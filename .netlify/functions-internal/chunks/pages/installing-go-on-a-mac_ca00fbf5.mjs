import { i as createComponent, j as spreadAttributes, k as renderTemplate, l as renderComponent, n as unescapeHTML } from '../astro_d77b23b3.mjs';
import { $ as $$BlogPostLayout } from './how-to-compare-dates-in-javascript_ecb74d5d.mjs';
import '@astrojs/internal-helpers/path';
import './_slug__b5f15030.mjs';
import 'clsx';
import 'html-escaper';
import './404_bde3e3c4.mjs';
/* empty css                                                        */import './__3284b77f.mjs';
import 'dayjs';
/* empty css                           */import '@cosmicjs/sdk';
import 'marked';
import '@supabase/supabase-js';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="([^"]+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>In this article, I am going to show you how to install &#x26; setup Go on Mac and also setup/configure VS Code for writing Go code.</p>\n<h2 id=\"install\">Install</h2>\n<p>The easiest way to install go is via go’s website <a href=\"https://golang.org/dl\">Golang.org</a>. After going to this page, click on the link for ‘Apple macOS’ and run the installer.</p>\n<p>If you have <a href=\"https://brew.sh/\">Homebrew</a> installed you can run the command <code>brew install golang</code></p>\n<p>After you have installed, let’s verify and test that everything is working.</p>\n<p>Run this command in your terminal:</p>\n<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #B392F0\">go</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">version</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #6A737D\"># You should see an output similar to the following:</span></span>\n<span class=\"line\"><span style=\"color: #6A737D\"># go version go1.13.7 darwin/amd64</span></span></code></pre>\n<h2 id=\"workspace-setup\">Workspace Setup</h2>\n<p>Go has this concept of a ‘workspace,’ which is where all of your source code and 3rd party packages, binaries etc. are all stored. On a mac this location is under:</p>\n<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #B392F0\">/Users/&#x3C;your</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">mac</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">usernam</span><span style=\"color: #E1E4E8\">e</span><span style=\"color: #F97583\">></span><span style=\"color: #9ECBFF\">/go</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #6A737D\"># mine is: /Users/rguss/go/src</span></span></code></pre>\n<p>This location is also known as your <code>GOPATH</code>. The location of this path and various other Go specific ENV Variables can be located with the command:</p>\n<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #B392F0\">go</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">env</span></span></code></pre>\n<p>You will also need to create 3 directories inside of your <code>$GOPATH</code> with the following:</p>\n<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #B392F0\">mkdir</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #79B8FF\">-p</span><span style=\"color: #E1E4E8\"> $GOPATH $GOPATH</span><span style=\"color: #9ECBFF\">/src</span><span style=\"color: #E1E4E8\"> $GOPATH</span><span style=\"color: #9ECBFF\">/pkg</span><span style=\"color: #E1E4E8\"> $GOPATH</span><span style=\"color: #9ECBFF\">/bin</span></span></code></pre>\n<h2 id=\"hello-world\">Hello World</h2>\n<p>Let’s create a simple hello world program and build it to make sure we have everything configured correctly.</p>\n<p>Inside of your <code>$GOPATH/src</code> directory create a directory called <code>hello</code> and then a file called <code>hello.go</code> inside of it.</p>\n<p>It should look like this <code>$GOPATH/src/hello/hello.go</code></p>\n<p>Then paste the following into <code>hello.go</code>:</p>\n<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #F97583\">package</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #B392F0\">main</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #F97583\">import</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">\"</span><span style=\"color: #B392F0\">fmt</span><span style=\"color: #9ECBFF\">\"</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #F97583\">func</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #B392F0\">main</span><span style=\"color: #E1E4E8\">() {</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">\tfmt.</span><span style=\"color: #79B8FF\">Printf</span><span style=\"color: #E1E4E8\">(</span><span style=\"color: #9ECBFF\">\"Hello, World!\"</span><span style=\"color: #E1E4E8\">)</span></span>\n<span class=\"line\"><span style=\"color: #E1E4E8\">}</span></span></code></pre>\n<p>Then build it with the go tool:</p>\n<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #79B8FF\">cd</span><span style=\"color: #E1E4E8\"> $HOME</span><span style=\"color: #9ECBFF\">/go/src/hello</span></span>\n<span class=\"line\"><span style=\"color: #B392F0\">go</span><span style=\"color: #E1E4E8\"> </span><span style=\"color: #9ECBFF\">build</span></span></code></pre>\n<p>Then:</p>\n<pre is:raw=\"\" class=\"astro-code github-dark\" style=\"background-color: #24292e; overflow-x: auto;\" tabindex=\"0\"><code><span class=\"line\"><span style=\"color: #B392F0\">./hello</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color: #6A737D\"># Output should be:</span></span>\n<span class=\"line\"><span style=\"color: #6A737D\"># Hello, World!</span></span></code></pre>\n<p>If you see <code>Hello, World!</code> output to the console, you are all set!</p>\n<h2 id=\"vs-code\">VS Code</h2>\n<p>The final step is to set up and configure <a href=\"https://code.visualstudio.com/\">VS Code</a> to write Go code. It is as simple as\ninstalling a single extension called <a href=\"https://marketplace.visualstudio.com/items?itemName=ms-vscode.Go\">Go</a>. Once installed, you are all set and ready to start writing Go.</p>\n<h2 id=\"additional-resources\">Additional Resources</h2>\n<ul>\n<li><a href=\"https://golang.org/\">Golang.org</a></li>\n<li><a href=\"https://go.dev/\">Go.dev</a></li>\n</ul>");

				const frontmatter = {"title":"Installing Go on a Mac","pubDate":"2020-02-01","slug":"go-basics-1-installing-go-on-a-mac","description":"In this article, I am going to show you how to install & setup Go (Golang) on Mac and also setup/configure VS Code for writing Go (Golang) code.","hero":"/images/Golang-Basics.png","tags":["go"],"layout":"../../layouts/BlogPostLayout.astro"};
				const file = "/mnt/c/Users/bryan/Desktop/Code/JS/AstroJS/3rdCoastNibblesAndSipps_creek/src/pages/posts/installing-go-on-a-mac.md";
				const url = "/posts/installing-go-on-a-mac";
				function rawContent() {
					return "\nIn this article, I am going to show you how to install & setup Go on Mac and also setup/configure VS Code for writing Go code.\n\n## Install\n\nThe easiest way to install go is via go's website [Golang.org](https://golang.org/dl). After going to this page, click on the link for 'Apple macOS' and run the installer.\n\nIf you have [Homebrew](https://brew.sh/) installed you can run the command `brew install golang`\n\nAfter you have installed, let's verify and test that everything is working.\n\nRun this command in your terminal:\n\n```bash\ngo version\n\n# You should see an output similar to the following:\n# go version go1.13.7 darwin/amd64\n```\n\n## Workspace Setup\n\nGo has this concept of a 'workspace,' which is where all of your source code and 3rd party packages, binaries etc. are all stored. On a mac this location is under:\n\n```bash\n/Users/<your mac username>/go\n\n# mine is: /Users/rguss/go/src\n```\n\nThis location is also known as your `GOPATH`. The location of this path and various other Go specific ENV Variables can be located with the command:\n\n```bash\ngo env\n```\n\nYou will also need to create 3 directories inside of your `$GOPATH` with the following:\n\n```bash\nmkdir -p $GOPATH $GOPATH/src $GOPATH/pkg $GOPATH/bin\n```\n\n## Hello World\n\nLet's create a simple hello world program and build it to make sure we have everything configured correctly.\n\nInside of your `$GOPATH/src` directory create a directory called `hello` and then a file called `hello.go` inside of it.\n\nIt should look like this `$GOPATH/src/hello/hello.go`\n\nThen paste the following into `hello.go`:\n\n```go\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n\tfmt.Printf(\"Hello, World!\")\n}\n```\n\nThen build it with the go tool:\n\n```bash\ncd $HOME/go/src/hello\ngo build\n```\n\nThen:\n\n```bash\n./hello\n\n# Output should be:\n# Hello, World!\n```\n\nIf you see `Hello, World!` output to the console, you are all set!\n\n## VS Code\n\nThe final step is to set up and configure [VS Code](https://code.visualstudio.com/) to write Go code. It is as simple as\ninstalling a single extension called [Go](https://marketplace.visualstudio.com/items?itemName=ms-vscode.Go). Once installed, you are all set and ready to start writing Go.\n\n## Additional Resources\n\n- [Golang.org](https://golang.org/)\n- [Go.dev](https://go.dev/)\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"install","text":"Install"},{"depth":2,"slug":"workspace-setup","text":"Workspace Setup"},{"depth":2,"slug":"hello-world","text":"Hello World"},{"depth":2,"slug":"vs-code","text":"VS Code"},{"depth":2,"slug":"additional-resources","text":"Additional Resources"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$BlogPostLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
