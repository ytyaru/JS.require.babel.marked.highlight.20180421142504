define(function() {
    class Display {
	constructor() {
	    this.msg = "Local. Babel, require.js, class !!"
	}
	print() {
	    console.log(this.msg);
	    const getMessage = () => this.msg;
	    document.body.innerHTML = getMessage();
            alert(this.msg);
	}
    }
    return Display;
});
