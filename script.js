console.log("Hello, World!")

// 代码的方式
// 注入 <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;800&display=swap" rel="stylesheet">
var link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;800&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

{/* <link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@400;600;700&display=swap" rel="stylesheet"> */}
var link2 = document.createElement('link');
link2.href = 'https://fonts.googleapis.com/css2?family=Merriweather:wght@400;600;700&display=swap';
link2.rel = 'stylesheet';
document.head.appendChild(link2);
