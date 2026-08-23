$$
\int \sqrt[5]{x^4} dx + 5 \int x \sqrt[4]{x^3} dx - \int x^2 \sqrt[3]{x^2} dx =
$$

Voglio trasformare i radicali in forma esponenziale (basta mettere alla $$x$$ come esponente una frazione con denominatore l'indice della radice e con numeratore la potenza del radicando)

- nel primo termine ho $$\sqrt[5]{x^4} = x^{4/5}$$
- nel secondo termine devo prima portare la $$x$$ da fuori a dentro la radice (basta moltiplicare l'esponente della $$x$$ per l'indice della radice)
  $$
  x \sqrt[4]{x^3} = \sqrt[4]{x^4 \cdot x^3} = \sqrt[4]{x^7} = x^{7/4}
  $$
- anche nel terzo termine devo prima portare la $$x^2$$ da fuori a dentro la radice (moltiplico l'esponente della $$x$$ per l'indice della radice)
  $$
  x^2 \sqrt[3]{x^2} = \sqrt[3]{x^6 \cdot x^2} = \sqrt[3]{x^8} = x^{8/3}
  $$

quindi ottengo

$$
= \int x^{4/5} dx + 5 \int x^{7/4} dx - \int x^{8/3} dx
$$