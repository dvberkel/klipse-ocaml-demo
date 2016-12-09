(function(){
    var input = document.getElementById('input');
    var compiled_source = ocaml.compile(input.textContent);
    var compiled_object = JSON.parse(compiled_source);

    var output = document.getElementById('output');
    output.textContent = compiled_object['js_code'];

    var code = "(function(exports){\n" + compiled_object['js_code'] + "\n})({});";
    eval(code);
})();
