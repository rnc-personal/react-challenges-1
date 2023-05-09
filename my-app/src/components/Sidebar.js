import css from './css/Sidebar.module.css'

const SideBar = (props) => {
    return <div className={css.sidebar}>
                <a href={props.url}>1</a>
                <a href={props.url}>2</a>
                <a href={props.url}>3</a>
            </div>
}


export default SideBar