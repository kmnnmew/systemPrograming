module.exports = {
  HTML:function(title, list, body, controls){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WEB1 - ${title}</title>
    </head>
    <body>
    <h1><a href="/">WEB</a></h1>
    ${list}
    ${controls}
    ${body}
    </body>
    </html>`;
  },
  list:function(filelist){
    var list = '<ul>';
    var i = 0;
    while(i <filelist.length){
      list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
      i = i + 1;
    }
    list = list + '</ul>'
    return list;
  }
}