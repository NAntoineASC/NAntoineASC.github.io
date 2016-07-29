<script src="https://code.jquery.com/jquery-3.1.0.min.js" integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=" crossorigin="anonymous"></script>

h1{
	<script>
		var para = $('p');
		para.click(updateName);
		function updateName(){
			var name = prompt('Enter a new name')
			para.text("His name is now "+name)
		}
	</script>
}