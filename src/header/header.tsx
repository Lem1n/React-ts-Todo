import logo from '/logo/rocket.png'
export function Header () {

    return (
        <header className={'header'}>
            <div className={'header_block'}>
                <img width={'22px'} height={'36px'} src={logo} alt={'logo'}/>
                <div>Rea<span>ct</span></div>
                <div>to<span>do</span></div>
            </div>
        </header>
    )
}