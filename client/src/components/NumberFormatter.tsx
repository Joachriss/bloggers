
export const NumberFormatter = (props : any) => {
    const toCount = props.value;
    function formatViews(total: number) {
        if (total < 1000) {
            return total.toString();
        } else if (total < 1000000) {
            return (total / 1000).toFixed(1) + 'k';
        } else {
            return (total / 1000000).toFixed(1) + 'm';
        }
    }

    return (
        <div>{formatViews(toCount)}</div>
    )
}
