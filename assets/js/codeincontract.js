
const textInLimit = 15000;

function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
}

function getByteLength(text) {
    const encoder = new TextEncoder(); // UTF-8로 변환
    const encodedText = encoder.encode(text); // 바이트 배열 생성
    return encodedText.length; // 바이트 배열의 길이 반환
}

function emojiToText(message) {
    return message.replace(/([\uD800-\uDBFF][\uDC00-\uDFFF])/g, (match) => {
        const codePoint = match.codePointAt(0).toString(16).toUpperCase();

        return "//".slice(1) + `u${codePoint}`;
    });
}



async function progress(curruntSteps, totalSteps) {
    const percentage = (curruntSteps / totalSteps) * 100;
    $(".progress-bar").animate({width: `${percentage}%`}, 500);
    const text = curruntSteps.toString() + " / " + totalSteps.toString();
    $(".progress_num").text(text);
}




async function OnChainTextIn() {
    $('.code-in-div').css('display', 'none');
    $('.progress_div').css("display", "flex");
    await progress(2, 5);

    const original_text = $('#text_input').val();
    const emoji_text = emojiToText(original_text)
    const byteLength = getByteLength(emoji_text)

    if (original_text == '') {
        return false;
    } else if (byteLength > textInLimit) {
        alert("Please Type less then: " + textInLimit.toString());
        alert("Your Text's length: " + byteLength);
        return false;
    }

    await progress(2, 5);


}

async function OnChainCodeIn() {
    try {
        $('.code-in-div').css('display', 'none');
        $('.progress_div').css("display", "flex");
        await progress(2, 5);

    } catch (error) {
        console.error("Error signing or sending transaction: ", error);
    }
}


async function Connect() {
    try {
        $('.code_in_menu').css('display', 'flex');
        $('.file-name').css('display', 'block');
        $('.connect-btn').css('display', 'none');


    } catch (err) {
        console.error(err);
    }
}