// Если elem – произвольный узел DOM-элемента…

// Правда, что elem.lastChild.nextSibling всегда равен null? Да, элемент elem.lastChild всегда последний, у него нет ссылки nextSibling.
// Правда, что elem.children[0].previousSibling всегда равен null? Нет, потому что elem.children[0] – потомок-элемент.