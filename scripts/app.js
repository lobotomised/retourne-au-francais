new RetourneFrancais()
    .rules(rules)
    .text(document.body)
    .run()

const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        for (const node of mutation.addedNodes) {
            if (node.nodeType === Node.TEXT_NODE) {
                new RetourneFrancais().rules(rules).text(node).run()
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                new RetourneFrancais().rules(rules).text(node).run()
            }
        }
    }
})

observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
})
