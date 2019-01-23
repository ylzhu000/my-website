const express = require("express"),
	  PORT = process.env.PORT || 8080,
	  app = express(),
	  path = require("path");
	  // reload = require("reload");


app.get("/", (req, res) => {
	app.use(express.static('public'))
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => {
	console.log("Server is starting at PORT ", PORT);
})

if (process.env.NODE_ENV !== 'production') {
	//reload(app);
}


