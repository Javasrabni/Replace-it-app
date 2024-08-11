const TextArea = document.getElementById('Textarea')
const WantToReplace = document.getElementById('WantToReplace')
const ButtonOutput = document.getElementById('Button')

const WithWhatToReplace = document.getElementById('WithWhatToReplace')
const DeleteBtn = document.getElementById('DeleteIt')

const OutputParag = document.getElementById('OutputValue')
let Output = document.createElement('p')
Output.style.fontSize="12px"

// Delete the word feature
let StatusDeleteBtn = false
DeleteBtn.addEventListener('click', ()=> {
    StatusDeleteBtn = !StatusDeleteBtn
    WithWhatToReplace.disabled = true
    
    if(StatusDeleteBtn) {
        WithWhatToReplace.value = null
    }

    if(StatusDeleteBtn) {
        DeleteBtn.style.color="white"
        DeleteBtn.style.backgroundColor="tomato"
    } else {
        DeleteBtn.style.color="tomato"
        DeleteBtn.style.backgroundColor="transparent"
        WithWhatToReplace.disabled = false
    }
})

// Replace Function
function ReplaceWord() {
    let $TextAreaValue = TextArea.value
    let $WantToReplaceValue = WantToReplace.value
    let $WithWhatToReplace = WithWhatToReplace.value

    return $TextAreaValue.replaceAll($WantToReplaceValue, $WithWhatToReplace)
}

// Button to genrate the output
ButtonOutput.addEventListener('click', ()=> {
    let $WantToReplaceValue = WantToReplace.value

    if(!$WantToReplaceValue) {
        alert('Text it first, you wanna replace what?')
        return;
    }
    DeleteBtn.style.outline="none"

    Output.innerHTML = `<p style="font-weight: 600;">Result:</p>${ReplaceWord()}`
    OutputParag.append(Output)

    TextArea.value = null
    WantToReplace.value = null
    WithWhatToReplace.value = null

    WithWhatToReplace.disabled = false
})

// Copy function
const CopyBtn = document.getElementById('CopyBtn');
CopyBtn.addEventListener('click', () => {
    const textToCopy = OutputParag.textContent || OutputParag.innerText;

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert('Teks berhasil disalin ke clipboard!');
        })
        .catch((err) => {
            alert('Gagal menyalin teks: ', err);
        });
});
