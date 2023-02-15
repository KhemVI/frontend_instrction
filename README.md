# Lessons 
0. Tips from a software developer to students 
1. Old-school front-end web concept 
  + HTML BASIC
  + WHY CSS ?
  + WEB RESPONSIVE
  + WHY JAVASCRIPT ?
  + FUNDAMENTAL JAVASCRIPT
  + GETTING DATA USING FETCH API
2. Introduction to modern web development
  + WHY FRONTEND FRAMEWORK ?
  + INITIALIZE VUE2 PROJECT
  + DEFAULT PROJECT CODE EXPLANATION AND FILE STRUCTURE
  + TECHNICAL CONCEPT
    + * State and Methods
    + Lifecycle Diagram
    + Template Syntax
    + Computed Properties and Watchers
    + * Components and properties
    + Connect a web app with API


## 0. Tips from a software developer to students
----

># FOCUS ON ITS DUTY AND ITS TECHNICAL NAME.
># Find right keyword and answer on google


![](./resource/example_vocabulary.png)


>## Basic of the most programming languages are the same.


```javascript
/* javascipt  */

/* Variable */
let num = 12;
let myJson = { a: "dog", b: 2}
let text = "Polar";
let myArray = [0, 10, 20, 30];

/* Reassign variable */
num = 13;
myJson.b = 2222; 

/* Reassign variable */

if (false) {
	console.log("something");
} else if (num > 13) {
	console.log("something = statement");
} else {
	console.log("statement");
}

// _________ loop array _________
for (let i = 0; i < myArray.length; i++) {
  console.log("4 times array", myArray[i]);
}
for (let value of myArray) {
  console.log("4 times array", value);
}
myArray.map((value) => {
  console.log("4 times array", value);
})

for (let key in myJson) {
  console.log("2 times json", myJson[key]);
}
// _________ function _________
function test(x){
	console.log("statement + condition + function");
  return `variable ${x}`;
}
```
>### Popular front-end framework (REACT, VUE, ANGULAR, SVELTE)
  + Core concept are the same.
    + components
    + state management
    + router
  + But there is something different 
    + ways to code
    + rending the UI

----
## 1. Old-school front-end web concept
### HTML Basic

+ My tutorial file
  + lesson1 directory --> 1_html_basic.html
  + [./lesson1/1_html_basic.html](./lesson1/1_html_basic.html)
+ How to run html as live server
![](./resource/how_to_run_html.png)
+ Guide to study HTML
  + [HTML on youtube - 45:19](https://www.youtube.com/watch?v=916GWv2Qs08&ab_channel=freeCodeCamp.org)
  + [Play HTML in w3school](https://www.w3schools.com/html/html_intro.asp)
  + [Study HTML with God](https://www.google.com/search?q=html&rlz=1C1CHBD_enTH893TH893&oq=html&aqs=chrome.0.69i59l4j0i433i512j69i60l3.1068j0j7&sourceid=chrome&ie=UTF-8)
+ Stuff you should know
![](./resource/html_structure.PNG)
### WHY CSS ?
Make website beautiful 
+ My tutorial file
  + lesson1 directory --> 2_playground.html
  + [./lesson1/2_playground.html](./lesson1/2_playground.html)
+ Guide to study CSS
  + [Study CSS with God](https://www.google.com/search?q=css+tutorial&rlz=1C1CHBD_enTH893TH893&oq=css+tu&aqs=chrome.0.69i59i512j69i57j0i512j0i22i30i625l2j69i60l3.1665j0j7&sourceid=chrome&ie=UTF-8)
  + [CSS on youtube - 1:25:38](https://www.youtube.com/watch?v=ieTHC78giGQ&ab_channel=freeCodeCamp.org)
+ Web responsive (Mobile, tabet, and desktop screen size)
  + How to see another screen size ![](./resource/responsive_youtube.PNG)
  + [Media query](https://www.w3schools.com/css/css_rwd_mediaqueries.asp)
  + [Media query on youtube - 21:16](https://www.youtube.com/watch?v=ZYV6dYtz4HA&ab_channel=DaniKrossing)
  + [Layout for responsive web on youtube - 17:13](https://www.youtube.com/watch?v=68O6eOGAGqA&ab_channel=AngelaDelise)

### WHY JAVASCRIPT ?
+ Make website interactive
  + [Guide to javascript in Thai - 3:16:22](https://www.youtube.com/watch?v=PGZ7QiKdumo&ab_channel=BorntoDev)
  + what makes javascript special
```html
  <body>
    <button onClick="functionYouLike(1150)">Any tag you like</button>
    <div id="your-id"></div>
    <script>
      document.getElementById("your-id").innerHTML = "Please click the button";
      function functionYouLike(num) {
        if (num === 1150) {
          document.getElementById("your-id").innerHTML = "PIZZA!!!!!";
          alert("pizza");
        } else if (num === 191) {
          alert("police");
        } else {
          alert("????");
        }
      }
    </script> 
  </body>
```
+ API Calling
  + [Call API in javascript on youtube - 6:34](https://www.youtube.com/watch?v=cuEtnrL9-H0&ab_channel=WebDevSimplified)
  + My tutorial file
    + lesson1 directory --> 4_final_playground.html
    + [./lesson1/4_final_playground.html](./lesson1/4_final_playground.html)
```javascript
    // CALL API GET METHOD
    fetch("http://localhost:3000/contact", {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
      console.log("Do something great here");
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });

    //  CALL API POST METHOD
    /*
      Request body = {
        "fullname": "Nitinun Manapattanachewin",
        "mobile": "0801911150"
      }
    */
    fetch("http://localhost:3000/contact", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "fullname": "Nitinun Manapattanachewin",
        "mobile": "0801911150"
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log("Do something great here");
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
```

2. Introduction to modern web development
  + WHY FRONTEND FRAMEWORK ?
  + INITIALIZE VUE2 PROJECT
  + DEFAULT PROJECT CODE EXPLANATION AND FILE STRUCTURE
  + TECHNICAL CONCEPT
    + * State and Methods
    + Lifecycle Diagram
    + Template Syntax
    + Computed Properties and Watchers
    + * Components and properties
    + Connect a web app with API
## 2. Introduction to modern web development
  + WHY FRONTEND FRAMEWORK ?
    + [More detail about front-end framework](https://www.ideamotive.co/blog/best-frontend-frameworks)
  + INITIALIZE VUE2 PROJECT 
```console
npm init vue@2
```
![](./resource/how_to_setup_vue.PNG)
  + DEFAULT PROJECT CODE EXPLANATION AND FILE STRUCTURE
    + ![](./resource/vue_file_structure.PNG)
    1. ASSETS - Vue file in project can use file in assets (PNG, GIF, CSS, etc)
    2. COMPONENTS - reusable code in logic and style to your element
    ```html
      <HelloWorld />
      <your-element>abcdef</your-element>
    ```
    3. ROUTER - connect path with vue file in the project
      + "localhost:5173/about" --> AboutView.vue
    4. VIEWS - Vue file for router
    5. APP.VUE - The first file you should take a look
# Editor.md

![](https://pandao.github.io/editor.md/images/logos/editormd-logo-180x180.png)

![](https://img.shields.io/github/stars/pandao/editor.md.svg) ![](https://img.shields.io/github/forks/pandao/editor.md.svg) ![](https://img.shields.io/github/tag/pandao/editor.md.svg) ![](https://img.shields.io/github/release/pandao/editor.md.svg) ![](https://img.shields.io/github/issues/pandao/editor.md.svg) ![](https://img.shields.io/bower/v/editor.md.svg)


**Table of Contents**

[TOCM]

[TOC]

#H1 header
##H2 header
###H3 header
####H4 header
#####H5 header
######H6 header
#Heading 1 linsk [Heading link](https://github.com/pandao/editor.md "Heading link")
##Heading 2 link [Heading link](https://github.com/pandao/editor.md "Heading link")
###Heading 3 link [Heading link](https://github.com/pandao/editor.md "Heading link")
####Heading 4 link [Heading link](https://github.com/pandao/editor.md "Heading link") Heading link [Heading link](https://github.com/pandao/editor.md "Heading link")
#####Heading 5 link [Heading link](https://github.com/pandao/editor.md "Heading link")
######Heading 6 link [Heading link](https://github.com/pandao/editor.md "Heading link")

##Headers (Underline)

H1 Header (Underline)
=============

H2 Header (Underline)
-------------

###Characters
                
----

~~Strikethrough~~ <s>Strikethrough (when enable html tag decode.)</s>
*Italic*      _Italic_
**Emphasis**  __Emphasis__
***Emphasis Italic*** ___Emphasis Italic___

Superscript: X<sub>2</sub>，Subscript: O<sup>2</sup>

**Abbreviation(link HTML abbr tag)**

The <abbr title="Hyper Text Markup Language">HTML</abbr> specification is maintained by the <abbr title="World Wide Web Consortium">W3C</abbr>.

###Blockquotes

> Blockquotes

Paragraphs and Line Breaks
                    
> "Blockquotes Blockquotes", [Link](http://localhost/)。

###Links

[Links](http://localhost/)

[Links with title](http://localhost/ "link title")

`<link>` : <https://github.com>

[Reference link][id/name] 

[id/name]: http://link-url/

GFM a-tail link @pandao

###Code Blocks (multi-language) & highlighting

####Inline code

`$ npm install marked`

####Code Blocks (Indented style)

Indented 4 spaces, like `<pre>` (Preformatted Text).

    <?php
        echo "Hello world!";
    ?>
    
Code Blocks (Preformatted text):

    | First Header  | Second Header |
    | ------------- | ------------- |
    | Content Cell  | Content Cell  |
    | Content Cell  | Content Cell  |

####Javascript　

```javascript
function test(){
	console.log("Hello world!");
}
 
(function(){
    var box = function(){
        return box.fn.init();
    };

    box.prototype = box.fn = {
        init : function(){
            console.log('box.init()');

			return this;
        },

		add : function(str){
			alert("add", str);

			return this;
		},

		remove : function(str){
			alert("remove", str);

			return this;
		}
    };
    
    box.fn.init.prototype = box.fn;
    
    window.box =box;
})();

var testBox = box();
testBox.add("jQuery").remove("jQuery");
```

####HTML code

```html
<!DOCTYPE html>
<html>
    <head>
        <mate charest="utf-8" />
        <title>Hello world!</title>
    </head>
    <body>
        <h1>Hello world!</h1>
    </body>
</html>
```

###Images

Image:

![](https://pandao.github.io/editor.md/examples/images/4.jpg)

> Follow your heart.

![](https://pandao.github.io/editor.md/examples/images/8.jpg)

> 图为：厦门白城沙滩 Xiamen

图片加链接 (Image + Link)：

[![](https://pandao.github.io/editor.md/examples/images/7.jpg)](https://pandao.github.io/editor.md/examples/images/7.jpg "李健首张专辑《似水流年》封面")

> 图为：李健首张专辑《似水流年》封面
                
----

###Lists

####Unordered list (-)

- Item A
- Item B
- Item C
     
####Unordered list (*)

* Item A
* Item B
* Item C

####Unordered list (plus sign and nested)
                
+ Item A
+ Item B
    + Item B 1
    + Item B 2
    + Item B 3
+ Item C
    * Item C 1
    * Item C 2
    * Item C 3

####Ordered list
                
1. Item A
2. Item B
3. Item C
                
----
                    
###Tables
                    
First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell 

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

| Function name | Description                    |
| ------------- | ------------------------------ |
| `help()`      | Display the help window.       |
| `destroy()`   | **Destroy your computer!**     |

| Item      | Value |
| --------- | -----:|
| Computer  | $1600 |
| Phone     |   $12 |
| Pipe      |    $1 |

| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ |:---------------:| -----:|
| col 3 is      | some wordy text | $1600 |
| col 2 is      | centered        |   $12 |
| zebra stripes | are neat        |    $1 |
                
----

####HTML entities

&copy; &  &uml; &trade; &iexcl; &pound;
&amp; &lt; &gt; &yen; &euro; &reg; &plusmn; &para; &sect; &brvbar; &macr; &laquo; &middot; 

X&sup2; Y&sup3; &frac34; &frac14;  &times;  &divide;   &raquo;

18&ordm;C  &quot;  &apos;

##Escaping for Special Characters

\*literal asterisks\*

##Markdown extras

###GFM task list

- [x] GFM task list 1
- [x] GFM task list 2
- [ ] GFM task list 3
    - [ ] GFM task list 3-1
    - [ ] GFM task list 3-2
    - [ ] GFM task list 3-3
- [ ] GFM task list 4
    - [ ] GFM task list 4-1
    - [ ] GFM task list 4-2

###Emoji mixed :smiley:

> Blockquotes :star:

####GFM task lists & Emoji & fontAwesome icon emoji & editormd logo emoji :editormd-logo-5x:

- [x] :smiley: @mentions, :smiley: #refs, [links](), **formatting**, and <del>tags</del> supported :editormd-logo:;
- [x] list syntax required (any unordered or ordered list supported) :editormd-logo-3x:;
- [x] [ ] :smiley: this is a complete item :smiley:;
- [ ] []this is an incomplete item [test link](#) :fa-star: @pandao; 
- [ ] [ ]this is an incomplete item :fa-star: :fa-gear:;
    - [ ] :smiley: this is an incomplete item [test link](#) :fa-star: :fa-gear:;
    - [ ] :smiley: this is  :fa-star: :fa-gear: an incomplete item [test link](#);
            
###TeX(LaTeX)
   
$$E=mc^2$$

Inline $$E=mc^2$$ Inline，Inline $$E=mc^2$$ Inline。

$$\(\sqrt{3x-1}+(1+x)^2\)$$
                    
$$\sin(\alpha)^{\theta}=\sum_{i=0}^{n}(x^i + \cos(f))$$
                
###FlowChart

```flow
st=>start: Login
op=>operation: Login operation
cond=>condition: Successful Yes or No?
e=>end: To admin

st->op->cond
cond(yes)->e
cond(no)->op
```

###Sequence Diagram
                    
```seq
Andrew->China: Says Hello 
Note right of China: China thinks\nabout it 
China-->Andrew: How are you? 
Andrew->>China: I am good thanks!
```

###End