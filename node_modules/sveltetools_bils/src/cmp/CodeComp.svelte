<script>
// @ts-nocheck
    export let code = '';

    const escapeCode = (str) => {
        let escapedStr = '';
        for (let i = 0; i < str.length; i++) {
            let code = str.charCodeAt(i);
            escapedStr += '[u+' + code.toString(16).padStart(4, '0') + ']';
        }
        return escapedStr;
    };
</script>

<pre>
    <code class="language-javascript">
        {code}
    </code>
</pre>

