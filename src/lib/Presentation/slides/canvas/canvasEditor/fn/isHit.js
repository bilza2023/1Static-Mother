
//@ts-nocheck

export default function isHit(itemX, itemY, itemWidth, itemHeight, cursorX, cursorY) {
    return (
        cursorX >= itemX &&
        cursorX <= itemX + itemWidth &&
        cursorY >= itemY &&
        cursorY <= itemY + itemHeight
    );
}
