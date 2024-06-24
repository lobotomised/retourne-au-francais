class UpdateDom {
    walkDOM(element, rules) {
        if (element === null) {
            return
        }

        let child, next

        switch (element.nodeType) {
            case 1:
            case 9:
            case 11:
                child = element.firstChild

                while (child) {
                    next = child.nextSibling

                    this.walkDOM(child, rules)

                    child = next
                }

                break
            case 3:
                this.updateText(element, rules)
                break
        }
    }

    updateText(element, rules) {
        let text = element.nodeValue

        rules.forEach(
            (rule) => text = text.replace(rule.pattern, rule.replacement)
        )

        element.nodeValue = text
    }
}
