import csv
import json

def extrair_paraiba(caminho_csv, caminho_json):
    linhas_paraiba = []

    # Abre o CSV com ponto e vírgula como separador
    with open(caminho_csv, mode='r', encoding='ISO-8859-1', newline='') as csvfile:
        leitor = csv.DictReader(csvfile, delimiter=';')

        # Percorre cada linha do CSV
        for linha in leitor:
            # filtra pela sigla:
            if linha["SG_UF"] == "PB":
                linhas_paraiba.append(linha)

    # Salva as linhas filtradas num arquivo JSON
    with open(caminho_json, mode='w', encoding='utf-8') as jsonfile:
        json.dump(linhas_paraiba, jsonfile, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    
    caminho_csv = "backend\microdados_ed_basica_2023.csv"
    caminho_json = "backend\dados_paraiba.json"

    extrair_paraiba(caminho_csv, caminho_json)
    print(f"Arquivo '{caminho_json}' criado com sucesso!")
