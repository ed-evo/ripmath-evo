# L'algebra dei circuiti è un'algebra di Boole

Mostriamo come esercizio in questa pagina che

$$
\{ B, ', \otimes, \oplus; 0, 1 \}
$$

con $$B = \{ 0, 1 \}$$
con $'$ operazione di passaggio al complementare $$(0'=1; 1'=0)$$

e con $$\otimes$$ ed $$\oplus$$ definite da:

| $$\otimes$$ | $$0$$ | $$1$$ |
| :---: | :---: | :---: |
| $$0$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{0}$$ |
| $$1$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{1}$$ |

| $$\oplus$$ | $$0$$ | $$1$$ |
| :---: | :---: | :---: |
| $$0$$ | $$\textcolor{red}{0}$$ | $$\textcolor{red}{1}$$ |
| $$1$$ | $$\textcolor{red}{1}$$ | $$\textcolor{red}{1}$$ |

è un'algebra di Boole.
Basterà mostrare che valgono tutte le proprietà che definiscono le [algebre di Boole](../pc/pcd.html).

- Vale la proprietà commutativa, infatti, essendo gli oggetti esistenti solamente $$0$$ ed $$1$$:
  $$
  1 \oplus 0 = 0 \oplus 1 = 1
  $$
  $$
  0 \otimes 1 = 1 \otimes 0 = 0
  $$
  > **Nota:** notare che la seconda uguaglianza è la duale della prima

- Vale la legge distributiva, infatti, essendo gli oggetti esistenti solamente $$0$$ ed $$1$$ avremo:
  $$
  1 \oplus 0 = 0 \oplus 1 = 1
  $$
  $$
  0 \otimes 1 = 1 \otimes 0 = 0
  $$
  > **Nota:** notare che la seconda uguaglianza è la duale della prima