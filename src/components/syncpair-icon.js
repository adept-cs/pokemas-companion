const SyncPairIcon = (name, filters, imgUrl, color) => {
    return (
        <div className={color}>
            <img src={`${process.env.PUBLIC_URL}${imgUrl}`} class={`sync-pair ${filters}`} title={name} alt={name} />
        </div>
    );
}

export default SyncPairIcon;