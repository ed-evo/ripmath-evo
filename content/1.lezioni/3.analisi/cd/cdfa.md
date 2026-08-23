# Primo limite notevole

Dobbiamo calcolare il valore del limite:

$$
\textcolor{red}{\lim_{x \to 0} \frac{\sin x}{x} =}
$$

E per fare questo utilizzeremo il teorema "dei carabinieri", cioè prenderemo una funzione che sia sempre maggiore, una funzione che sia sempre minore e vedremo che entrambe le funzioni per $$x$$ che tende a zero valgono $$1$$; di conseguenza il nostro limite varrà $$1$$.

Consideriamo questa disuguaglianza:

$$
\textcolor{red}{\sin x < x < \tan x}
$$

che, come si può vedere dalla figura, è valida essendo $$PQ$$ ($$\sin x$$) minore dell'arco $$x$$ che a sua volta è minore di $$AT$$ ($$\tan x$$). Ora, se divido tutto per $$\sin x$$ (e posso farlo senza cambiare niente perché è positivo), otterrò:

$$
\textcolor{red}{\frac{\sin x}{\sin x} < \frac{x}{\sin x} < \frac{\tan x}{\sin x}}
$$

semplificando:

$$
\textcolor{red}{1 < \frac{x}{\sin x} < \frac{1}{\cos x}}
$$

Ora invertendo i termini basta cambiare di verso alle disuguaglianze:

$$
\textcolor{red}{1 > \frac{\sin x}{x} > \cos x}
$$

Ora abbiamo:

$$
\textcolor{red}{\lim_{x \to 0} 1 = 1}
$$

e

$$
\textcolor{red}{\lim_{x \to 0} \cos x = 1}
$$

da ciò segue che anche per quella in mezzo:

$$
\textcolor{red}{\lim_{x \to 0} \frac{\sin x}{x} = 1}
$$