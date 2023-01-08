type NssClientMessageRequest = {
    [x: string]: any;
};
type NssClientLoadingIndicatorByRetItem = {
    target_el: HTMLElement;
    loading_indicator: NssClientLoadingIndicator;
    xhr: XMLHttpRequest;
};
type NssClientLoadingIndicatorByRet = {
    [x: string]: NssClientLoadingIndicatorByRetItem;
};
type NssClientMessageResponse = {
    [x: string]: any;
};
/**
 * ~responseCallback
 */
type NssClient = (response_data: NssClientMessageResponse) => any;
