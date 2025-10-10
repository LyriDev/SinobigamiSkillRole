import { messageFormQuery, submitFormQuery } from "./documentQueries";

function overrideFormValue(element: HTMLInputElement|HTMLTextAreaElement, value: string): void{ // フォームのinput要素等の内容を上書きする関数
    element.setRangeText(value, 0, element.value.length, "end");
    element.dispatchEvent(new Event("input", { bubbles: true }));
}

function clickTheButton(element: HTMLButtonElement){ // 特定のbutton要素をプログラムで押下する関数
    element.click()
}

export function changeMessage(messageText: string, isDo: boolean = true): boolean { // メッセージを変更する関数
    const messageElm = document.querySelector<HTMLTextAreaElement>(messageFormQuery) as HTMLTextAreaElement;
    if (messageElm?.value !== messageText) {
        if(isDo) overrideFormValue(messageElm, messageText);
        return true;
    }else{
        return false;
    }
}

export function clickSubmitButton(){ // 送信ボタンを押下して送信する関数
    const submitButton: HTMLButtonElement = document.querySelector(submitFormQuery) as HTMLButtonElement
    clickTheButton(submitButton)
}

// ダブルクリックでココフォリアのメッセージを送信する関数
export function sendCcfoliaMessage(text: string){
    const isChangedMessage: boolean = changeMessage(text); // メッセージを変更する
    if(!isChangedMessage){
        // メッセージに変更なければ送信する
        clickSubmitButton();
    }
}
