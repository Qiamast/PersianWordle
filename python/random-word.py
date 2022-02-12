import random
with open("PersianWordList.txt", "r", encoding="utf-8") as f:
  words = f.readlines()


rand_word_list = random.choices(words, k=10)
with open("output.js", 'w', encoding="utf-8") as output:
  for w in rand_word_list:
    output.write(f"{w}")
  print("done!")
