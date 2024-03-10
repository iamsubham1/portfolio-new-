export const getColors = (() => {
    const colors = ['#26467F', '#2BD576', '#BD3806', '#FFF5E1', '#514983', '756AB6'];
    let index = 0;

    return () => {
        const color = colors[index];
        index = (index + 1) % colors.length;
        return color;
    };
})();
