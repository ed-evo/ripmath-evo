# [Mediane di un triangolo]{.text-red}

Chiamiamo $\delta$ l'angolo **BMA**, di conseguenza l'angolo **CMA** sarà $180 - \delta$.
Applichiamo il teorema di Carnot ai triangoli **BMA** e **CMA** ricordando che essendo **AM** la mediana sarà:

$$
BM = MC = \frac{a}{2}
$$

Applico al triangolo **BMA**:

$$
AB^2 = AM^2 + BM^2 - 2 AM BM \cos \delta
$$

Sostituisco ai lati il loro valore:

$$
c^2 = m_a^2 + \left( \frac{a}{2} \right)^2 - 2 m_a \frac{a}{2} \cos \delta
$$

$$
\textcolor{red}{c^2 = m_a^2 + \frac{a^2}{4} - a m_a \cos \delta}
$$

Ora applico il teorema di Carnot al triangolo **CMA**:

$$
AC^2 = AM^2 + CM^2 - 2 AM CM \cos(180 - \delta)
$$

Sostituisco ai lati il loro valore:

$$
b^2 = m_a^2 + \left( \frac{a}{2} \right)^2 - 2 m_a \frac{a}{2} \cos(180 - \delta)
$$

Calcolando e ricordando che $\cos(180 - \delta) = - \cos \delta$:

$$
\textcolor{red}{b^2 = m_a^2 + \frac{a^2}{4} + a m_a \cos \delta}
$$

Ora sommo termine a termine le due uguaglianze trovate:

$$
\textcolor{red}{b^2 + c^2 = m_a^2 + \frac{a^2}{4} - a m_a \cos \delta + m_a^2 + \frac{a^2}{4} + a m_a \cos \delta}
$$

e sommando i termini simili trovo:

$$
b^2 + c^2 = 2 m_a^2 + \frac{a^2}{2}
$$

Ora da questa uguaglianza ricavo $m_a$, cioè il valore della mediana:

$$
2 m_a^2 = b^2 + c^2 - \frac{a^2}{2}
$$

$$
m_a^2 = \frac{b^2}{2} + \frac{c^2}{2} - \frac{a^2}{4}
$$

$$
m_a^2 = \frac{2b^2 + 2c^2 - a^2}{4}
$$

Estraggo la radice ed ottengo la formula finale:

$$
\textcolor{blue}{m_a = \sqrt{\frac{2b^2 + 2c^2 - a^2}{4}}}
$$

Siccome posso fare lo stesso ragionamento partendo da uno qualunque dei vertici del triangolo otteniamo le formule delle tre mediane del triangolo:

$$
\textcolor{blue}{m_a = \sqrt{\frac{2b^2 + 2c^2 - a^2}{4}}}
$$

$$
\textcolor{blue}{m_b = \sqrt{\frac{2a^2 + 2c^2 - b^2}{4}}}
$$

$$
\textcolor{blue}{m_c = \sqrt{\frac{2a^2 + 2b^2 - c^2}{4}}}
$$