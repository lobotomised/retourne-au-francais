class RetourneFrancais {
    rules(rules) {
        this.rules = rules

        return this
    }

    text(text) {
        this.text = text

        return this
    }

    run() {
        new UpdateDom().walkDOM(this.text, this.rules)
    }
}
