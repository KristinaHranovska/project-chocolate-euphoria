export const scrollToElementById = (id) => {
    const getSectionById = document.querySelector(`#${id}`);
    if (!getSectionById) return;
    const topOffset = 20;
    const topPosition = getSectionById.offsetTop - topOffset;

    window.scrollTo({
        top: topPosition,
        behavior: 'smooth',
    });
};