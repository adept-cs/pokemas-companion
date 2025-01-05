const SyncPairIcon = (name, filters, imgUrl, color) => {
    return (
        <div className="sync-pair-icon">
            <div className={color}>
                <img src={`${process.env.PUBLIC_URL}${imgUrl}`} className={`sync-pair ${filters}`} title={name} alt={name} />
            </div>
        </div>
    );
}

export default SyncPairIcon;