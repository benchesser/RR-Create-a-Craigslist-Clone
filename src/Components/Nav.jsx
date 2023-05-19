function Nav() {
    return (
        <div className="directory">
            <select>
                <option value='Gallery'>Gallery</option>
            </select>
            <button>&lt;&lt;</button>
            <button>&lt;Previous</button>
            <p>1/3000</p>
            <button>Next&gt;</button>
            <button>&gt;&gt;</button>       
        </div>
    )
}

export default Nav;