console.log("Hello, World!")

// 代码的方式
// 注入 <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;800&display=swap" rel="stylesheet">
var link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;800&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

