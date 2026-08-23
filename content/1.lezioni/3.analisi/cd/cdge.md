# Forme indeterminate del tipo $$1^{\infty}$$ e $$\infty^0$$

È piuttosto raro che capiti di calcolare forme di questo genere (ho visto farlo solo in un liceo scientifico), però per risolverle basta ricordare che il logaritmo è funzione inversa dell'esponenziale e che valgono le seguenti uguaglianze (indico con $$\log x$$ il logaritmo naturale di $$x$$):

$$
\textcolor{red}{\lim_{x \to c} f(x)^{g(x)} =}
$$
$$
\textcolor{red}{= \lim_{x \to c} e^{\log f(x)^{g(x)} =}}
$$
$$
\textcolor{red}{= \lim_{x \to c} e^{g(x) \cdot \log f(x) =}}
$$
$$
\textcolor{red}{= e^{\lim_{x \to c} g(x) \cdot \log f(x)}}
$$

ed all'esponente avrò una delle forme già viste.

---

Esempio: $$\textcolor{red}{\lim_{x \to \infty} (x^2)^{1/x} = \infty^0}$$

Applichiamo la regola vista prima:

$$
\textcolor{red}{\lim_{x \to \infty} e^{(\log x^2)^{1/x}} =}
$$
$$
\textcolor{red}{\lim_{x \to \infty} e^{1/x \cdot \log x^2} =}
$$
$$
\textcolor{red}{e^{\lim_{x \to \infty} 1/x \cdot \log x^2}}
$$
$$
\textcolor{red}{e^{\lim_{x \to \infty} (2\log x) / x} = e^0 = 1}
$$

---

Con le uguaglianze scritte sopra possiamo anche (quasi) provare un'affermazione fatta sulle potenze: cioè che qualunque numero elevato a zero vale $$1$$, e quindi anche $$0^0 = 1$$ (e non è una forma indeterminata):

provate a calcolare il limite:

$$
\textcolor{red}{\lim_{x \to 0} x^x = 0^0}
$$

Applicando la regola:

$$
\textcolor{red}{\lim_{x \to 0} e^{\log x^x} =}
$$
$$
\textcolor{red}{= \lim_{x \to 0} e^{x \cdot \log x} =}
$$
$$
\textcolor{red}{= e^{\lim_{x \to 0} x \cdot \log x} =}
$$
$$
\textcolor{red}{= e^{\lim_{x \to 0} (\log x) / (1/x)} = e^0 = 1}
$$

> **Nota:** Il problema è che il logaritmo è definito solamente quando l'argomento è maggiore di zero, quindi il limite precedente effettivamente è un limite destro, mentre non posso fare il limite sinistro; inoltre la funzione $$\textcolor{red}{x^x}$$ è definita solo per valori positivi delle $$x$$ perché non possiamo considerare potenze con base negativa in quanto non hanno significato. Per questo ho messo quel quasi.