function MainNavigationItem(props: any) {
    return (
        <li>
            <a href={props.href} onClick={props.onClick} className="text-gray-900 dark:text-zinc-500 bio-gray font-bold hover:underline" aria-current="page">{props.children}</a>
        </li>
    );
}

export default MainNavigationItem;